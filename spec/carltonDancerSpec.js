describe("carltonDancer", function() {

  var carltonDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    carltonDancer = new makeCarltonDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(carltonDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that adds a css class", function() {
    sinon.spy(carltonDancer.$node, 'addClass');
    carltonDancer.step();
    expect(carltonDancer.$node.addClass.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(carltonDancer, "step");
      expect(carltonDancer.step.callCount).to.be.equal(0);
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(carltonDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(carltonDancer.step.callCount).to.be.equal(2);
    });
  });
});
