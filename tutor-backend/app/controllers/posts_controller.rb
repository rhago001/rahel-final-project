class PostsController < ApplicationController

  def index
    render json: Post.all.to_json(include: [:comments])
    
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
    post=Post.find(params[:id])
    render json: post

  end 
  
  def update
    post=Post.find(params[:id])
    post.update(post_params)
    respond_with post, json: post
  end 

  private
  def post_params
    params.require(:post).permit(:post, :user_id)
  end 
end 