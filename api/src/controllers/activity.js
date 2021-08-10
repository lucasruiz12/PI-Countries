const { Country, Activity } = require('../db');

const postActivity = async (req, res) => {
    const { name, difficulty, duration, season, idCountry } = req.body;
    const validate = await Activity.findOne({
        where: {
            name: name
        }
    });
    if (!validate) {
        const createActivity = await Activity.create({
            name: name,
            difficulty: difficulty,
            duration: duration,
            season: season
        });
        const checkCountry = await Country.findAll({
            where: {
                id: idCountry
            }
        });
        const showActivity = await createActivity.addCountries(checkCountry);
        
        return res.send(showActivity);
    }
    return res.send(`Ya creaste la actividad ${name}`)
}

module.exports = { postActivity }