export default loadComponent=> (
    class AsyncComponent extends React.Component {
        state = {
            Mod: null,
        }

        componentWillMount() {
            if (this.hasLoadedComponent()) {
                return;
            }
            loadComponent()
                .then(module => module.default)
                .then((Mod) => {
                    this.setState({ Mod });
                })
                .catch((err) => {
                    console.error(`Cannot load component in <AsyncComponent />`);
                    throw err;
                });
        }

        hasLoadedComponent() {
            return this.state.Mod !== null;
        }

        render() {
            const { Mod } = this.state;
            return (Mod) ? <Mod {...this.props} /> : null;
        }
    }
);