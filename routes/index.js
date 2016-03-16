/*
 * Get home page.
 */

exports.view = function(req, res){
  console.log("loading landing page");
  res.render('index');
}
