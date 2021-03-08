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
    review=Review.find_by(params[:id])
    render json: review

  end 
  
  def update
    review=Review.find_by(params[:id])
    review.update(review_params)
    respond_with Review, json: review
  end 

  private
  def review_params
    params.require(:review).permit(:comment, :trainer_id, :user_id)
  end 
end 