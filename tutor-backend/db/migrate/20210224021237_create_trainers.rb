class CreateTrainers < ActiveRecord::Migration[6.0]
  def change
    create_table :trainers do |t|
      t.string :name
      t.string :image
      t.integer :years_experience
      t.string :flatiron_alum
      t.integer :price
      
    end
  end
end

