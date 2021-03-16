class ReviewsController < ApplicationController

  def index
    render json: Review.all.to_json
    
  end 

  def create

    review=Review.create(review_params)
    if review.save
      render json: review
    else
      render json: {error: "Error, unable to create review"}
    end 
  end 

  def show
    review=Review.find(params[:id])
    render json: review

  end 
  
  def update
    review=Review.find(params[:id])
    review.update(review_params)
    render json: review
    
  end 


  def destroy
    review=Review.find(params[:id]).destroy
    render json: review
    

  end 

  private
  def review_params
    params.require(:review).permit(:comment, :trainer_id, :user_id)
  end 
end 