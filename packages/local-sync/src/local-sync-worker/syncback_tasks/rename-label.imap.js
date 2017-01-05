const SyncbackTask = require('./syncback-task')

class RenameLabelIMAP extends SyncbackTask {
  description() {
    return `RenameLabel`;
  }

  affectsImapMessageUIDs() {
    return false
  }

  async run(db, imap) {
    const labelId = this.syncbackRequestObject().props.labelId
    const newLabelName = this.syncbackRequestObject().props.displayName
    const label = await db.Label.findById(labelId)
    return imap.renameBox(label.name, newLabelName);
  }
}
module.exports = RenameLabelIMAP
