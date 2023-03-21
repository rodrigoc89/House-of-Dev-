const { User } = require("../models/User")

class UsersService {
    static async userRegister(body) {
      try { 
          const newUser = await User.create(body);
          return newUser;
        
      } catch (error) {
        return { error: true, data: error };
      }
    }
}
module.exports = UsersService