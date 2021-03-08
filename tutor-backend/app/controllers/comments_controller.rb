class CommentsController < ApplicationController

  def index
    render json: comment.all.to_json
    
  end 

  def create

    comment=Comment.create(comment_params)
    if comment.save
      render json: comment
    else
      render json: {error: "Error, unable to create comment"}
    end 
  end 

  def show
    comment=Comment.find_by(params[:id])
    render json: comment

  end 
  
  def update
    comment=Comment.find_by(params[:id])
    comment.update(comment_params)
    respond_with comment, json: comment
  end 

  private
  def comment_params
    # params.require(:comment).permit(:comment, :trainer_id, :user_id)
  end 
end 