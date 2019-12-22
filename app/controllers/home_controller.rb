class HomeController < ApplicationController
  def index
  end

  def download_pdf
    send_file(
      "#{Rails.root}/public/cv.pdf",
      filename: "alice_roy_camille_cv.pdf",
      type: "application/pdf"
    )
  end
end
