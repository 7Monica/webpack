it("should be able to load the split chunk on demand", () => {
	return import(`./shared/${Math.floor(Math.random() * 20)}.js`);
});
