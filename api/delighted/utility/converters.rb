module Delighted
  module Utility
    # Holds a collection of methods for converting Delighted
    #   objects to JSON'able hashes.
    module Converters
      class << self
        # Converts a survey response into a JSON'able hash.
        #
        # @param response [Delighted::SurveyResponse]
        #
        # @return [Hash]
        def survey_response(response)
          hash = response.to_h

          hash[:id] = response.id

          hash
        end
      end
    end
  end
end