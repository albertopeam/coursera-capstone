require 'rails_helper'

RSpec.describe "CitiesApis::", type: :request do

  def response_body
    JSON.parse(response.body)
  end

  describe "cities RDBMS-backed::" do

    before(:each) { City.delete_all }
    after(:each) { City.delete_all }

    it "when create a city then it stored in RDBMS" do
      city = City.create(name:"Baltimore")
      expect(City.find(city.id).name).to eq("Baltimore")
    end

    it "when api/cities is invoked then Baltimore is returned" do
      city = City.create(name:"Baltimore")
      expect(cities_path).to eq("/api/cities")
      get cities_path
      expect(response).to have_http_status(:ok)
      expect(response_body.count).to eq(1)
      expect(response_body.first["name"]).to eq("Baltimore")
    end

    it "when api/city/:id is invoked with Baltimore id then Baltimore is returned" do
      city = City.create(name:"Baltimore")
      expect(city_path(city.id)).to eq("/api/cities/#{city.id}")
      get city_path(city.id)
      expect(response).to have_http_status(:ok)
      expect(response_body["name"]).to eq("Baltimore")
    end

  end

end
