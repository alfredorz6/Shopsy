class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    helper_method :current_user, :logged_in?

    private

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def require_login
        
        unless logged_in?
            render json: {base: ["invalid credentials"]}, status: 401
        end 
    end

    def login(user)
        session[:session_token] = user.reset_session_token!
        @current_user = user
    end

    def logged_in?
        !!current_user
    end

    def log_out
        
        current_user.reset_session_token! if logged_in?
        session[:session_token] = nil
        @current_user = nil
    
    end
   
 
    

end
