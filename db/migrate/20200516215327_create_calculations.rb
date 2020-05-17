class CreateCalculations < ActiveRecord::Migration[6.0]
  def change
    create_table :calculations do |t|
      t.string :first_string
      t.string :second_string
      t.string :result
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
