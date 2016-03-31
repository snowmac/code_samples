require 'date'

# Used as an in memory store of records
class Record

  # Sorter class needs to read these attributes
  attr_reader :first_name, :last_name, :gender, :dob

  def initialize(options)
    @first_name = options[:first_name].chomp.strip
    @last_name = options[:last_name].chomp.strip
    @middle = options[:middle] ? options[:middle].chomp.strip : ' '
    @gender = options[:gender].downcase.include?('f') ? 'Female' : 'Male'
    @color = options[:color].chomp.strip
    @dob = options[:dob]
  end

  def self.header_string
    "%-20s %-20s %-20s %-20s %-20s" % ['Last Name', 'First Name', 'Gender', 'Date Of Birth', 'Favorite Color']
  end

  def to_string
    "%-20s %-20s %-20s %-20s %-20s" % [@last_name, @first_name, @gender, @dob.strftime("%m/%d/%y"), @color]
  end

end
