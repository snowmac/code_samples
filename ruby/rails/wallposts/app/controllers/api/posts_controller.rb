class Api::PostsController < ApplicationController

  def index
    @posts = Post.all.includes(:user)
    render json: @posts, include: [:user]
  end

  def create
    user = User.find_or_create_by(email: params['email'], name: params['name'])
    Post.create(comment: params['comment'], user: user)
    @posts = Post.all.includes(:user)
    render json: @posts, include: [:user]
  end

end
