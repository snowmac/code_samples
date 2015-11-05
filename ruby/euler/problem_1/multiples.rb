# https://projecteuler.net/problem=1

class Multiples

  def compute_pair(x,y)
    puts "The sum of multiples of #{x} and #{y} is #{sum_multiples(x,y)}"
  end

  def return_compute_pair(x,y)
    sum_multiples(x,y)
  end

  private

  def sum_multiples(x,y)
    x_multiples = find_multiple(x)
    y_multiples = find_multiple(y)

    # Finding the duplicate multiples
    intersection = x_multiples & y_multiples

    # sums
    sum_of_x_multiples = x_multiples.inject(:+)
    sum_of_y_multiples = y_multiples.inject(:+)
    sum_of_intersections_of_multiples = intersection.inject(:+)

    # Add the sums and then account for the duplicate / overlapping multiples so we don't count twice
    sum_multiples = ((sum_of_x_multiples + sum_of_y_multiples) - sum_of_intersections_of_multiples)
  end

  def find_multiple(x)
    values = [] # Save the values
    multiples = x # Increment the multiples

    while multiples < 1000
      values.push(multiples)
      multiples = multiples + x
    end

    values
  end

end
