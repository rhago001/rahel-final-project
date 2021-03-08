class PostsController < ApplicationController

  def index
    render json: Post.all.to_json
    
  end 

  def create

    post=Post.create(post_params)
    if post.save
      render json: post
    else
      render json: {error: "Error, unable to create post"}
    end 
  end 

  def show
    post=Post.find_by(params[:id])
    render json: post

  end 
  
  def update
    post=Post.find_by(params[:id])
    post.update(post_params)
    respond_with post, json: post
  end 

  private
  def post_params
    # params.require(:post).permit(:comment, :trainer_id, :user_id)
  end 
end 