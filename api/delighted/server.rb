require 'delighted'
require 'multi_json'
require 'sinatra/base'
require 'sinatra/cross_origin'

require_relative 'utility/converters'

module Delighted
  # Server code to run.
  class Server < Sinatra::Base

    ###
    # Get around Cross Origin Check
    #
    # **WARNING** DO NOT USE THIS OUTSIDE OF TESTING!!
    #    This stuff is important and is only removed here for demo purposes.
    register Sinatra::CrossOrigin

    configure do
      enable :cross_origin
    end

    before do
      response.headers['Access-Control-Allow-Origin'] = '*'
    end

    def initialize
      Delighted.api_key = ENV['DELIGHTED_API_KEY']

      super
    end

    get '/survey-responses' do
      content_type :json

      opts = {}

      opts[:order] = 'desc' if params['Recent'] || params['recent']

      count = params['Count'] || params['count']
      opts[:per_page] = count && /^[1-9][0-9]?$|^100$/.match(count) ? count.to_i : 20

      resp = Delighted::SurveyResponse.all(opts)

      result = resp.map { |x| Utility::Converters.survey_response(x) }

      filter = params['Rating'] || params['rating']

      if filter && !filter.empty?
        match = filter.downcase.to_sym
        result = result.select { |x| x[:rating] == match }
      end

      text_only = params['Require_Comment'] || params['require_comment']

      if text_only && text_only.casecmp?('true')
        result = result.select { |x| x[:comment] && !x[:comment].strip.empty? }
      end

      MultiJson.dump(result)
    end
  end
end
