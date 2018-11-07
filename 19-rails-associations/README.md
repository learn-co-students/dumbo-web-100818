# Rails Associations

## SWBATs

* Refresher on has_many and belongs_to
* Use Rails form helper methods that create an associated object
* Implement dependent: :destroy in order to destroy associated objects to normalize database


## Resources

* [Example Video](https://youtu.be/FrXjK9M9FfM)
* [Starter Code](https://github.com/learn-co-curriculum/lectures-starter-code/tree/master/rails/forms-associations)


## Outline

```text
20m Create a new application
5m Review Active record associations (has_many, belongs_to)
20m Build form using form_for :object and f.collection select
===
45m Total
```

### Create a new application

`rails new flavortown`

Introduce scaffold generator and explain difference between model, controller, resources and scaffold generators.

Create a new model Doctor `rails g resources User name`
Create a new model Doctor `rails g resources Post name user_id:integer`

migrate:
`rails db:migrate`

Add the appropriate relationships

Stress the importance of dependent destroy
What happens when you delete an instance without dependent: :destroy?
```ruby
class User < ApplicationRecord
  has_many :posts, dependent: :destroy
  # provide methods like User#posts
end

class Post < ApplicationRecord
  belongs_to :user
end

```

Create the form using the DIY method first and relate it to sinatra

```html
<!-- DIY f.collection_select -->
  <select name="post[user_id]">
    <% User.all.each do |user| %>
      <option value="<%= user.id %>">
        <%= user.name %>
      </option>
    <% end %>
  </select>
```

Then show them the RAILS WAY™️
```ruby
  <%= form_for(@post) do |f| %>
    <%= f.label :title %>
    <%= f.text_field :title %>

    <%= f.label :content %>
    <%= f.text_area :content %>

    <%= f.label :user %>

      # First arg is method we want to call on @post (:user_id),
      # Second The collection we want to use to populate the dropdown(User.all),
      # Third The value we want in our params: User#id,
      # Fourth What do we want to display in the tag itself? User#name

  <%= f.collection_select(:user_id, User.all, :id, :name) %>
  <%= f.submit %>
<% end %>
  ```


Be sure to _break_ the collection select and replace each of the arguments and show how they change the params
