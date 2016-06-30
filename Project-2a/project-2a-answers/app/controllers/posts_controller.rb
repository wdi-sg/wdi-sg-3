class PostsController < ApplicationController
  before_action :require_signed_in, except: [:show, :index]
  before_action :set_post, only: [:show, :edit, :update, :destroy]
  before_action :ensure_owned_by_current_user, only: [:edit, :update, :destroy]

  def index
    @posts = Post.all
  end

  def show
  end

  def new
    @post = current_user.posts.build
  end

  def edit
  end

  def create
    @post = current_user.posts.new(post_params)

    respond_to do |format|
      if @post.save
        format.html { redirect_to [current_user, @post], notice: 'Post was successfully created.' }
      else
        format.html { render :new }
      end
    end
  end

  def update
    respond_to do |format|
      if @post.update(post_params)
        format.html { redirect_to [current_user, @post], notice: 'Post was successfully updated.' }
      else
        format.html { render :edit }
      end
    end
  end

  def destroy
    @post.destroy
    respond_to do |format|
      format.html { redirect_to user_posts_url(current_user), notice: 'Post was successfully destroyed.' }
    end
  end

  private
    def ensure_owned_by_current_user
      redirect_to home_path, alert: "This post doesn't belong to you!" unless current_user == @post.user
    end

    def set_post
      @post = Post.find(params[:id])
    end

    def post_params
      params.require(:post).permit(:title, :body)
    end
end
