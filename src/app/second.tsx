import {css, html} from 'react-strict-dom';

const styles = css.create({
    root: {
        marginBlock: '1rem',
        fontWeight: 'bold',
        backgroundColor: 'white',
        color: 'red',
    },
    cond: {
        borderWidth: '5px'
    },
    opacity: (value) => ({
        opacity: value
    })
})

export default function SecondCard() {
    return (
        <html.div
            style={[
                styles.root,
                true && styles.cond,
            ]}
        >Second Page</html.div>
    );
}