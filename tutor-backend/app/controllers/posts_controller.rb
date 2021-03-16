class PostsController < ApplicationController

  def index
    render json: Post.all.to_json(include: [:comments])
    
  end 

  def create

    post=Post.create(post_params)
    
      render json: post.to_json(include: [:comments])
   
  end 



  def destroy
    post=Post.find(params[:id]).destroy
    render json: post
  end 
  
  def update
    post=Post.find(params[:id])
    post.update(post_params)
    respond_with post, json: post
  end 

  private
  def post_params
    params.require(:post).permit(:post, :user_id, :name)

  end 
end 