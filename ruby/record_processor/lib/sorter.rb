# Used to encapsulate the behavior of sorting

class Sorter

  def self.by_gender(list)
    self.by(list, 'gender')
  end

  def self.by_dob(list)
    self.by(list, 'dob')
  end

  def self.by_last_name(list)
    self.by(list, 'last_name').reverse!
  end

  # Dry helper to sort all the items without repeating yourself
  def self.by(list, field)
    list.sort_by { |item| item.send(field) }
  end

end
