class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email, null: true
      t.string :name, null: false
      t.string :gravatar, null: true

      t.timestamps null: false
    end
  end
end
