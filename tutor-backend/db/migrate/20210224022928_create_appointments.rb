class CreateAppointments < ActiveRecord::Migration[6.0]
  def change
    create_table :appointments do |t|
      t.integer :user_id
      t.integer :trainer_id
      t.string :date
      t.string :time
    end
  end
end
