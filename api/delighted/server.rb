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

      resp = Delighted::SurveyResponse.all(opts)

      MultiJson.dump(resp.map { |x| Utility::Converters.survey_response(x) })
    end
  end
end
