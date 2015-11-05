require './multiples.rb'

instance = Multiples.new

instance.compute_pair(3,5)

if instance.return_compute_pair(3,5) == 233168
  puts 'The value of compute of 3 & 5 was calculated correctly'
else
  puts 'The value of compute of 3 & 5 was supposed to be 233168'
end
