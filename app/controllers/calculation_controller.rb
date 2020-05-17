class CalculationController < ApplicationController
  def is_continuous
    first_str = params[:first_input]
    second_str = params[:second_input]

    result = lcs(first_str, second_str).length == second_str.length ? "YES" : "NO"
    @current_user.calculations.create!(first_string: first_str, second_string: second_str, result: result)

    render json: {
      message: 'Computed successfully',
      id: generate_id,
      first_string: first_str,
      second_string: second_str,
      result: result,
      status: 200
    }
  end

  def user_calculations
    calculations = @current_user.calculations
    render json: {
      message: 'Fetched successfully',
      results: calculations,
      status: 200
    }
  end

  private

  def lcs(xstr, ystr)
    return "" if xstr.empty? || ystr.empty?

    x, xs, y, ys = xstr[0..0], xstr[1..-1], ystr[0..0], ystr[1..-1]
    if x == y
      x + lcs(xs, ys)
    else
      [lcs(xstr, ys), lcs(xs, ystr)].max_by {|x| x.size}
    end
  end

  def calculations_params
    params.permit(:first_input, :second_input)
  end

  def generate_id
    Array.new(15) { "#{Array('a'..'z').sample}#{rand(1..9)}" }.join
  end
end
