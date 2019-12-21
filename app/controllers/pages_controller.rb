class PagesController < ApplicationController
  # before_action :authenticate_user!, only: [:home]

  def home
  end

  def login
  end

  def is_logged_in?
    if user_signed_in? && current_user
      render json: {
        logged_in: true,
        user: current_user
      }
    else
      render json: {
        logged_in: false,
        message: 'no such user'
      }
    end
  end
end
