class CreateLiquors < ActiveRecord::Migration[7.0]
  def change
    create_table :liquors do |t|
      t.string :title
      t.string :image
      t.string :description
      t.float :rating

      t.timestamps
    end
  end
end
