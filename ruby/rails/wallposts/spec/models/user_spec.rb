require 'rails_helper'

RSpec.describe User, type: :model do

  context "Testing that the User Model returns a hashed for gravatar" do 
    subject(:user) do
       User.new(
        email: "Test@example.com",
        name: "Fake Name"
      )
    end
    it { expect(user.gravatar).to eq("1aeffb4a35de64179c4f26629fc45b94") }
  end
  
end
