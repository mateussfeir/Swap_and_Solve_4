<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Square Color Changer with React</title>
    <!-- React dependencies -->
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <!-- Babel for JSX parsing (not for production use) -->
    <script src="https://unpkg.com/@babel/standalone@7.10.3/babel.min.js"></script>
    <style>
        #change-color {
            display: block;
            margin: 20px auto;
            padding: 10px 20px;
            font-size: 20px;
            cursor: pointer;
        }
        #color-square {
            width: 1000px;
            height: 400px;
            background-color: #ddd; /* Initial color */
            margin: 20px auto;
        }
        /* React list styling */
        #color-history {
            margin: 20px auto;
            padding: 10px;
            max-width: 1000px;
        }
        .color-history-item {
            padding: 5px;
            margin: 5px;
            background-color: #eee;
            list-style-type: none;
        }
    </style>
</head>
<body>
<button id="change-color">Change Square Color</button>
<div id="color-square"></div>
<!-- Container for React Component -->
<div id="color-history"></div>

<!-- React Component -->
<script type="text/babel">
    class ColorHistory extends React.Component {
        constructor(props) {
            super(props);
            this.state = { colors: [] };
        }

        addColor = (newColor) => {
            this.setState(prevState => ({
                colors: [newColor, ...prevState.colors]
            }));
        }

        render() {
            return (
                <div>
                    <h2>Color History</h2>
                    <ul>
                        {this.state.colors.map((color, index) => (
                            <li key={index} className="color-history-item" style={{backgroundColor: color}}>
                                {color}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }

    // Render the React component
    const historyComponent = ReactDOM.render(<ColorHistory />, document.getElementById('color-history'));
</script>

<!-- jQuery logic -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
    $(document).ready(function() {
        $("#change-color").click(function() {
            // Generate a random color
            const randomColor = '#' + (Math.random()*0xFFFFFF<<0).toString(16).padStart(6, '0');
            // Change the background color of the square
            $("#color-square").css("background-color", randomColor);
            // Call the React component method to add color to the history
            historyComponent.addColor(randomColor);
        });
    });
</script>
</body>
</html>
