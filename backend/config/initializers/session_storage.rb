if Rails.env === 'production' 
  Rails.application.config.session_store :cookie_store, key: '_online_code_compiler', domain: 'your-frontend-domain'
else
  Rails.application.config.session_store :cookie_store, key: '_online_code_compiler' 
end
