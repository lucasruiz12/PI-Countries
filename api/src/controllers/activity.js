const { Country, Activity } = require('../db');

const postActivity = async (req, res) => {
    const { name, difficulty, duration, season, id } = req.body;
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
                id: id
            }
        });
        const showActivity = await createActivity.addCountries(checkCountry);

        return res.send(showActivity);
    }
    const checkCountry = await Country.findAll({
        where: {
            id: id
        }
    });
    const showActivity = await createActivity.addCountries(checkCountry);

    return res.send(showActivity);
}

module.exports = { postActivity }