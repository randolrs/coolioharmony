class SessionsController < Devise::SessionsController
  def create
    if request.format.json?
      self.resource = warden.authenticate(auth_options)
      if resource.nil?
        return render json: {status: 'error', message: 'invalid username or password'}
      end
      sign_in(resource_name, resource)
      # render json: {status: 'success', message: '¡User authenticated!'}
      render :json => {
        'csrfParam' => request_forgery_protection_token,
        'csrfToken' => form_authenticity_token
      }
    # else
    #   self.resource = warden.authenticate!(auth_options)
    #   set_flash_message(:notice, :signed_in)
    #   sign_in(resource_name, resource)
    #   yield resource if block_given?
    #   respond_with resource, location: after_sign_in_path_for(resource)
    end
  end

  def destroy # Assumes only JSON requestss
    signed_out = (Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name))
    render :json => {
        'csrfParam' => request_forgery_protection_token,
        'csrfToken' => form_authenticity_token
    }
  end
end
