class WallController < ApplicationController

  def index
    @comments = Post.all.includes(:users)
  end

end
