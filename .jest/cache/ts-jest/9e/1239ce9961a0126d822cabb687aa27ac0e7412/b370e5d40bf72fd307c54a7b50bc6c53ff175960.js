"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var react_native_1 = require("react-native");
var instructions = react_native_1.Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_1.default.createElement(react_native_1.Text, { style: styles.welcome }, "Welcome to React Native!"),
            react_1.default.createElement(react_native_1.Text, { style: styles.instructions }, "To get started, edit App.js"),
            react_1.default.createElement(react_native_1.Text, { style: styles.instructions }, instructions)));
    };
    return App;
}(react_2.Component));
exports.default = App;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2NoZWxsb25nL1dvcmtzcGFjZS9SZWFjdE5hdGl2ZS9ob2NPbmxpbmVBQ1QvQXBwLnRzeCIsIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7R0FPRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUgsZ0RBQXlCO0FBQ3pCLCtCQUFrQztBQUNsQyw2Q0FBa0Y7QUFFbEYsSUFBTSxZQUFZLEdBQUcsdUJBQVEsQ0FBQyxNQUFNLENBQUM7SUFDbkMsR0FBRyxFQUFFLDBCQUEwQixHQUFHLDZCQUE2QjtJQUMvRCxPQUFPLEVBQ0wsNENBQTRDO1FBQzVDLHlDQUF5QztDQUM1QyxDQUFDLENBQUM7QUFLSDtJQUFpQyx1QkFBZ0I7SUFBakQ7O0lBVUEsQ0FBQztJQVRDLG9CQUFNLEdBQU47UUFDRSxPQUFPLENBQ0wsOEJBQUMsbUJBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsOEJBQUMsbUJBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sK0JBQWlDO1lBQzVELDhCQUFDLG1CQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxZQUFZLGtDQUFvQztZQUNwRSw4QkFBQyxtQkFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsWUFBWSxJQUFHLFlBQVksQ0FBUSxDQUNsRCxDQUNSLENBQUM7SUFDSixDQUFDO0lBQ0gsVUFBQztBQUFELENBQUMsQUFWRCxDQUFpQyxpQkFBUyxHQVV6Qzs7QUFFRCxJQUFNLE1BQU0sR0FBRyx5QkFBVSxDQUFDLE1BQU0sQ0FBQztJQUMvQixTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUUsQ0FBQztRQUNQLGNBQWMsRUFBRSxRQUFRO1FBQ3hCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLGVBQWUsRUFBRSxTQUFTO0tBQzNCO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsUUFBUSxFQUFFLEVBQUU7UUFDWixTQUFTLEVBQUUsUUFBUTtRQUNuQixNQUFNLEVBQUUsRUFBRTtLQUNYO0lBQ0QsWUFBWSxFQUFFO1FBQ1osU0FBUyxFQUFFLFFBQVE7UUFDbkIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsWUFBWSxFQUFFLENBQUM7S0FDaEI7Q0FDRixDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2NoZWxsb25nL1dvcmtzcGFjZS9SZWFjdE5hdGl2ZS9ob2NPbmxpbmVBQ1QvQXBwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFNhbXBsZSBSZWFjdCBOYXRpdmUgQXBwXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlXG4gKlxuICogQGZvcm1hdFxuICogQGZsb3dcbiAqIEBsaW50LWlnbm9yZS1ldmVyeSBYUExBVEpTQ09QWVJJR0hUMVxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7UGxhdGZvcm0sIFN0eWxlU2hlZXQsIFRleHQsIFZpZXcsIFRvdWNoYWJsZU9wYWNpdHksIH0gZnJvbSAncmVhY3QtbmF0aXZlJztcblxuY29uc3QgaW5zdHJ1Y3Rpb25zID0gUGxhdGZvcm0uc2VsZWN0KHtcbiAgaW9zOiAnUHJlc3MgQ21kK1IgdG8gcmVsb2FkLFxcbicgKyAnQ21kK0Qgb3Igc2hha2UgZm9yIGRldiBtZW51JyxcbiAgYW5kcm9pZDpcbiAgICAnRG91YmxlIHRhcCBSIG9uIHlvdXIga2V5Ym9hcmQgdG8gcmVsb2FkLFxcbicgK1xuICAgICdTaGFrZSBvciBwcmVzcyBtZW51IGJ1dHRvbiBmb3IgZGV2IG1lbnUnLFxufSk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuXG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxUZXh0IHN0eWxlPXtzdHlsZXMud2VsY29tZX0+V2VsY29tZSB0byBSZWFjdCBOYXRpdmUhPC9UZXh0PlxuICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLmluc3RydWN0aW9uc30+VG8gZ2V0IHN0YXJ0ZWQsIGVkaXQgQXBwLmpzPC9UZXh0PlxuICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLmluc3RydWN0aW9uc30+e2luc3RydWN0aW9uc308L1RleHQ+XG4gICAgICA8L1ZpZXc+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGZsZXg6IDEsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNGNUZDRkYnLFxuICB9LFxuICB3ZWxjb21lOiB7XG4gICAgZm9udFNpemU6IDIwLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgbWFyZ2luOiAxMCxcbiAgfSxcbiAgaW5zdHJ1Y3Rpb25zOiB7XG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBjb2xvcjogJyMzMzMzMzMnLFxuICAgIG1hcmdpbkJvdHRvbTogNSxcbiAgfSxcbn0pO1xuIl0sInZlcnNpb24iOjN9