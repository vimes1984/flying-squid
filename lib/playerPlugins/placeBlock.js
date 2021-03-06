var vec3 = require("vec3");

module.exports=inject;

function inject(serv,player)
{
  player._client.on("block_place",function(packet){
    if(packet.direction==-1 || packet.heldItem.blockId==-1) return;
    var referencePosition=new vec3(packet.location.x,packet.location.y,packet.location.z);
    var directionVector=directionToVector[packet.direction];
    var placedPosition=referencePosition.plus(directionVector);
    player.changeBlock(placedPosition,packet.heldItem.blockId);
  });
}

var directionToVector=[new vec3(0,-1,0),new vec3(0,1,0),new vec3(0,0,-1),new vec3(0,0,1),new vec3(-1,0,0),new vec3(1,0,0)];
