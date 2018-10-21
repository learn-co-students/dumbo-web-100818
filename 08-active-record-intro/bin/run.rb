require_relative "../config/environment"

puts "Create your Pokemon!"
puts "===================="

puts "the name??"
poke_name = gets.chomp

puts "the type?"
poke_type = gets.chomp

pokemon = Pokemon.create(
  name: poke_name,
  poke_type: poke_type
)

puts "you make a #{pokemon.name}!! WOzaA. so kewl!"

puts "++++++++++++++++++++++++++"
puts "here are all of our pokemon!!"
Pokemon.all.each do |pokemon|
  puts "- #{pokemon.name}: #{pokemon.poke_type} type - fainted? #{pokemon.fainted}"
end
