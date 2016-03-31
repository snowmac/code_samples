require 'date'
require_relative 'record'

class Processor

  def initialize(name, delimiter)
    @file_name = name
    @delimiter = delimiter
  end

  def run
    record_array = []
    File.foreach(@file_name) do |line|
      element = line.split(@delimiter)

      object = {}

      object[:last_name] = element[0]
      object[:first_name] = element[1]

      # Ordering and type of data changes based on the delimiter
      if (@delimiter == ',')
        object[:gender] = element[2]
        object[:color] = element[3]
        object[:dob] = parse_date(element[4])
      elsif (@delimiter == '|')
        object[:middle] = element[2]
        object[:gender] = element[3]
        object[:color] = element[4]
        object[:dob] = parse_date(element[5])
      elsif (@delimiter == ' ')
        object[:middle] = element[2]
        object[:gender] = element[3]
        object[:color] = element[5]
        object[:dob] = parse_date(element[4])
      end

      record_array.push Record.new(object)
    end

    record_array
  end

private

  def parse_date(date)
    date = date.strip
    if date.include? '-'
      data = date.split('-')
    else
      data = date.split('/')
    end

    month = data[0].to_i
    day = data[1].to_i
    year = data[2].to_i

    Date.new(year,month,day)
  end

end
