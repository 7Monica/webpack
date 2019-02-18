import "./shared1";

it("should be able to load the split chunk on demand", () => {
	return import(/* webpackChunkName: "theName" */ "./shared2");
});
