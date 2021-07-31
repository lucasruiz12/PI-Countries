const { Country, Activity } = require('../db');

const postActivity = async (req, res) => {
    const {name, difficulty, duration, season, countryAct} = req.body;
    const validate = await Activity.findOne({
        where: {
            name: name
        }
    });
    if (!validate) {
        const createActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season
        })
    }
}