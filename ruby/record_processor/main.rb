require './lib/processor'
require './lib/record'
require './lib/sorter'

class Main

  def initialize(folder)
    # Key value map of english word to delimiter
    @map = {
      "comma" => ",",
      "pipe" => "|",
      "space" => " "
    }

    @all_records = []
    @folder = folder

    # Pre populate the collections
    populate_records_collection
  end

  def print_all
    # Sort all the items, then output each one
    puts "Sort by gender"
    puts Record.header_string
    Sorter.by_gender(@all_records).each { |item| puts item.to_string }

    puts "\nSort by dob"
    puts Record.header_string
    Sorter.by_dob(@all_records).each { |item| puts item.to_string }

    puts "\nSort by last name"
    puts Record.header_string
    Sorter.by_last_name(@all_records).each { |item| puts item.to_string }
  end

private

  def populate_records_collection
    Dir.foreach(@folder) do |file_name|
      path = "files/#{file_name}"

      # take the map, if the file path countains the key, we pass in the value, which is a delimiter
      @map.each do |name, delimiter|
        # If the delimiter map key is found in the path, we use that delimiter for that key
        if path.include?(name)
          # Ideally each file would have an extension indicating the delimiter, in this case; it does not.
          # So we have to do it a hacky way
          # Merge the record sets together
          @all_records = @all_records + Processor.new(path, delimiter).run
        end
      end
    end
  end

end
