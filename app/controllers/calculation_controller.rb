class CalculationController < ApplicationController
  before_action :authenticate_user!

  def is_continuous
    a = params[:first_input]
    b = params[:second_input]

  end

  private

  def calculations_params
    params.permit(:first_input, :second_input)
  end
end
