Rails.application.routes.draw do
  root      'home#index'
  get "home/download_pdf"
  # get 'download' => 'downloader#download'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
