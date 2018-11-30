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

          hash[:created_at] = Time.at(hash[:created_at])
          hash[:updated_at] = Time.at(hash[:updated_at])

          hash[:rating] = score_descriptor(hash[:score])

          hash
        end

        # Returns a descriptor string based on the score returned.
        #
        # @param score [Integer]
        #
        # @return [Symbol]
        def score_descriptor(score)
          if score >= 8
            :good
          elsif score >= 5
            :okay
          else
            :bad
          end
        end
      end
    end
  end
end