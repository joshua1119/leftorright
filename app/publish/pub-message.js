/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-2-18
 * Time: 下午11:00
 * To change this template use File | Settings | File Templates.
 */
module.exports = function(fw){
    fw.publish('message', 'pub-message', function(callback){
        var collection = this;
        collection.find({}, {}, function(err, items){
            callback(items);
        });
    });
}