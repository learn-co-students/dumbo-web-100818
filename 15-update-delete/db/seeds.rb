
veggie_hash = {
  🥔: "Potato",
  🍅: "Tomato",
  🥦: "Broccoli",
  "🥬": "Romaine",
  🥒: "Cucumber",
  🌶: "Chili",
  🌽: "Corn",
  🥕: "Carrot",
  🍠: "Yam"
}


veggie_hash.each do |moje, string|
  Vegetable.create(emoji: moje, name: string)
  puts moje.to_s
  # puts string
end
