require 'rails_helper'

RSpec.describe "StatesApi::", type: :request do

  def response_body
    JSON.parse(response.body)
  end

  describe "States MongoDB-backed::" do

    before(:each) { State.delete_all }
    after(:each) { State.delete_all }

    it "when create a state then it is stored in MongoDB" do
      state = State.create(name: "Maryland")
      expect(State.find(state.id).name).to eq("Maryland")
    end

    it "when api/states is invoked then Maryland is returned" do
      state = State.create(name: "Maryland")
      expect(states_path).to eq("/api/states")
      get states_path
      expect(response).to have_http_status(:ok)
      expect(response_body.count).to eq(1)
      expect(response_body.first["name"]).to eq("Maryland")
      expect(response_body.first.keys).to contain_exactly("id", "name", "created_at", "updated_at", "url")
    end

    it "when api/states/:id is invoked with Baltimore id then Baltimore is returned" do
      state = State.create(name: "Maryland")
      expect(state_path(state.id)).to eq("/api/states/#{state.id}")
      get state_path(state)
      expect(response).to have_http_status(:ok)
      expect(response_body["name"]).to eq("Maryland")
      expect(response_body.keys).to contain_exactly("id", "name", "created_at", "updated_at", "url")
    end
  end

end
