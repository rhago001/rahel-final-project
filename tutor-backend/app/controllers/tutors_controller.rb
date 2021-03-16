class TutorsController < ApplicationController

  def index
    render json: Trainer.all.to_json(include: [:reviews, :appointments])
  
  end 

  def show
    trainer=Trainer.find(params[:id])
    render json: trainer.to_json(include: [:reviews, :appointments])
    

  end 
  
  private

  def tutor_params
    params.required(:tutor).permit(:name, :image, :years_experience, :flatiron_alum, :price)

  end

end 