
const { authenticate } = require('ldap-authentication')
export default async function handler(req, res) {
  
    
      let authenticated = await authenticate({
        ldapOpts: { url: 'ldaps://fcsldap.cs.dal.ca:636' },
        userDn: 'uid=kavale,cn=users,dc=cs,dc=dal,dc=ca',
        userPassword: '',
        userSearchBase: 'cn=users,dc=cs,dc=dal,dc=ca',
        usernameAttribute: 'uid',
        username: 'kavale',
      })
     
      // Handle any other HTTP method*/
      res.status(200).json(authenticated)
    
  }